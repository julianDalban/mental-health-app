import brainIcon from './pictures/new_logo_face_brain.png';

function InfoCard() {
    return (
        <div className="card bg-base-100 w-50 p-5 rounded-lg m-auto shadow-xl hover:-translate-y-1 hover:scale-120 hover:bg-emerald-200">
                <figure>
                    <img
                    src={brainIcon}
                    alt="Test Image" />
                </figure>
                <div className="card-body">
                    <h2 className="font-bold text-lg text-center">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-green-300">Buy Now</button>
                    </div>
                </div>
            </div>
    );
}

export default InfoCard;