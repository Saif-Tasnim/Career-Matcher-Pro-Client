

// eslint-disable-next-line react/prop-types
const Card = ({ image, title }) => {
    
    return (
        <div className="p-6">
            <div>
                <img src={image} className="w-full rounded-md mb-8 h-[125px]" alt="images" />
            </div>

            <div className="my-6">
                <h1 className="text-center text-xl my-7 underline">{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur eum nisi vero ipsa et itaque mollitia, unde deserunt sapiente.</p>
            </div>
        </div>
    );
};

export default Card;