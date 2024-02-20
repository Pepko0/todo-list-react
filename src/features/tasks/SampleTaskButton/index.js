import {Button} from "./styled";

const SampleTaskButton = ({text, ...props}) => (
        
        <Button {...props}>
            {text}
        </Button>
);

export default SampleTaskButton;