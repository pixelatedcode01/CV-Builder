export default function Wrapper({ className, children }) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
