import { Link } from "react-router-dom"


export default function ErrorPage() {
    return(
        <div className="flex items-center justify-center mt-40  flex-col text-center">
    <img src="public/teemo.webp" alt="error" className="mb-4" />
    <p className="bg-red-500 text-white p-4 rounded-md shadow-lg font-semibold text-lg max-w-xl mb-4">
        🚨 HOHO!!! I Think we have a problem..
    </p>
    <Link to='/'>
        <p className="font-bold text-3xl text-red-500 hover:text-red-700 textShadow">click here to reload </p>
    </Link>
</div>

    )
}