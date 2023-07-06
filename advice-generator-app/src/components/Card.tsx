import { AdviceI } from "../types";
import React from "react";
const Card = React.memo(({ data }: { data: AdviceI | any }) => {
    return (
        <div>
            <h1 className="text-light-green text-sm font-thin tracking-widest">
                ADVICE ID # {data?.slip.id}
            </h1>
            <p className="xl:text-3xl text-2xl  my-2 mb-5 text-white xl:leading-10">{data?.slip.advice}</p>
        </div>
    );
});
export default Card;