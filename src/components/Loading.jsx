const Loading = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <svg className="animate-spin" fill="none" height="100" viewBox="0 0 48 48" width="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="blue" />
                </svg>
        </div>

    )
}

export default Loading