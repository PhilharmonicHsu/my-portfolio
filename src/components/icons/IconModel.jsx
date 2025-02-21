export default function IconModel({children, title}) {
    return <div className="relative group">
        <span className="absolute bottom-16 left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {title}
        </span>
        {children}
    </div>
}