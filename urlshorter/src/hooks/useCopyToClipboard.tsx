import { useState } from "react";
import { Copied, CopyFn } from "../types";
function useCopyToClipboard(): [Copied, CopyFn] {
  const [copied, setCopied] = useState<Copied>(false);
  const copyToClipboard: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      return true;
    } catch (error) {
      console.error("Failed to copy text: ", error);
      return true;
    }
  };

  return [copied, copyToClipboard];
}
export default useCopyToClipboard;