import Link from "next/link";

const MenuItem = ({ item, url, setToogle }) => {
    return (
        <li className="flex items-center flex-grow">
            <Link href={`${url ? url : "#"}`}>
                <a className="flex-grow px-2 py-1 text-sm font-medium text-left transition-all xl:px-4 xl:text-base rounded-2xl hover:bg-gray-400/30" onClick={setToogle}>
                    {item}
                </a>
            </Link>
        </li>
    )
}

export default MenuItem
