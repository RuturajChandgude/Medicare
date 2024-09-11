import { Link } from "react-router-dom";
const CheckoutSuccess=()=>{
    return(
        <div className="bg-gray-100 h-screen">
            <div className="bg-white p-6 md:mx-auto">
                <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                  <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.77 8.93l-6.346 9.128c-.27.39-.747.56-1.194.43l-5.64-1.67a.82.82 0 01-.528-1.05c.08-.2.24-.37.44-.47l5.64-1.67 6.345-9.128a.822.822 0 011.194-.43.82.82 0 01.47.44c.08.2.11.42.07.64z"></path>
                </svg>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment done!</h3>
                    <p className="text-gray-600 my-2">
                        Thank you for completing secire online payment
                    </p>
                    <p>Have a great day!</p>
                    <div className="py-10 text-center">
                        <Link to="/home" className="px-12 bg-buttonBgColor text-white font-semibold py-3">
                        Go back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSuccess

