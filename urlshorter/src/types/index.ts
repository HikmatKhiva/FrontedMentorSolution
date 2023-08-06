/* Service Card data Type */
export type Serivce = {
  id: number;
  title: string;
  image: string;
  text: string;
};
/* Footer List data Type */
export type FooterLink = {
  title: string;
  links: Link[];
};
/* Footer List Link data Type */
type Link = {
  id: number;
  title: string;
  url: string;
};
/* Social Link data Type */
export type Social = {
  id: number;
  title: string;
  image: string;
  url: string;
};

export type ShortLink = {
  code: string;
  full_share_link: string;
  full_short_link: string;
  full_short_link2: string;
  full_short_link3: string;
  original_link: string;
  share_link: string;
  short_link: string;
  short_link2: string;
  short_link3: string;
};
export type Copied = boolean;
export type CopyFn = (text: string) => Promise<boolean>;