import { ErrorOutlineRounded } from '@mui/icons-material';

function ErrorMessage({ message })
{
    return (
        <div className="error-message">
            <ErrorOutlineRounded />
            {message}
        </div>
    );
}

export default ErrorMessage;
