

interface Props {
    message: string;
}

function ErrorMessage({ message }: Props) {
    return <div className="alert alert-danger">{message}</div>;
}


export default ErrorMessage;
