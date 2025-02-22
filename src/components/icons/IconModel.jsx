export default function IconModel({children, title, size}) {
    let spanClasses = 'absolute left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacityssName'
    
    spanClasses += (size > 30) ? ' bottom-16' : ' bottom-10';

    return <div className="relative group">
        <span className={spanClasses}>
            {title}
        </span>
        {children}
    </div>
}