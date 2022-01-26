import { ErrorOutlineRounded } from '@mui/icons-material';

function ErrorMessage({ message })
{
    return (
        <div className="error-message">
            <ErrorOutlineRounded />
            <span>{message}</span>
        </div>
    );
}

export default ErrorMessage;
