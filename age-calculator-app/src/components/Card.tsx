type CardTypes = {
    number: number 
    title: string
}
const Card = ({ number, title }: CardTypes) => {
    return (
        <div>
            <h2 className="2xl:text-[70px] flex items-center font-openSans text-4xl md:text-6xl leading-none">
                <span className="italic font-[800] text-purple">{number || '--'}</span>
                <span className="font-medium ml-4">{title}</span>
            </h2>
        </div>
    )
}
export default Card