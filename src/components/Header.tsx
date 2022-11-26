import { useNavigate } from 'react-router-dom';

function Header() {
    const navegate = useNavigate();

    return (
        <div className="content">
            <nav className="flex justify-end">
                <ul className="flex items-end">
                    <li onClick={() => navegate('/about')} className="my-10 px-3 text-2xl font-mplus hover:text-blue-600 hover:underline hover:decoration-1 cursor-pointer">About</li>
                    <li onClick={() => navegate('/projects')} className="my-10 text-2xl font-mplus hover:text-blue-600 hover:underline hover:decoration-1 cursor-pointer">Projects</li>
                    <li onClick={() => navegate('/contact')} className="my-10 px-3 text-2xl font-mplus hover:text-blue-600 hover:underline hover:decoration-1 cursor-pointer">Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;