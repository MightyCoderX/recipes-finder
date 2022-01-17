import { ErrorOutlineRounded } from '@mui/icons-material';

function ErrorMessage({ message })
{
    return (
        <div style={{color: 'red'}}>
            <ErrorOutlineRounded />
            {message}
        </div>
    );
}

export default ErrorMessage;
