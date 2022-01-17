import { Icon } from '@mui/material';

function RecipeInfo({ icon, text })
{
    return (
        <div className="recipe-info">
            <Icon baseClassName="material-icons-round">{icon}</Icon>
            <span>{text}</span>
        </div>
    );
}

export default RecipeInfo;
