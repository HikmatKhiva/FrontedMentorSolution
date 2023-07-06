import React from "react";
const Error = React.memo((error: any) => {
    return (
        <div className="text-center">
            <h1 className="text-red-500">Error</h1>
            <p>{error?.message}</p>
        </div>
    )
})
export default Error;