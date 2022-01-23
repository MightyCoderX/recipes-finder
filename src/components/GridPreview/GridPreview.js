import GridPreviewItem from "./GridPreviewItem";
import '../../css/grid-preview.css';

function GridPreview({ count })
{
    return (
        <div>
            <div className="grid-preview">
                { Array(count).fill({}).map((_, index) => <GridPreviewItem key={index} />) }
            </div>
        </div>
    );
}

export default GridPreview;
