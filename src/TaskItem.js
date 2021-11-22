import TextField from '@mui/material/TextField';
import { useMediaQuery } from 'react-responsive';

function TaskItem(props) {
    const isResized = useMediaQuery({minWidth: 400})

    return <label className="task-item" >
        <div className={"task-color"} id={"task-color-" + props.priority + "-" + props.checked}>
            <input type="checkbox" className="check" defaultChecked={props.checked} onClick={() => props.toggleCheckbox(props.id)}/>
            <span className="checkmark"></span>
            <TextField
                id="task-text-entry"
                variant="standard"
                placeholder="Click to Enter Task"
                value={props.name}
                onChange={e => props.handleTaskNameChange(e, props.id)}
                disabled={props.checked}
                InputProps={{ disableUnderline: true,
                                         style: { background: "transparent",
                                                marginTop:"2%",
                                                paddingBottom:"10px",
                                                fontSize: "8vw",
                                                fontFamily: "Futura",
                                                width: "80%"} }}
                multiline
                maxRows={2}
                minRows={1}
            />
            <select name="Priority" id="priority" onChange={e => props.updatePriority(props.id, e.target.value)}>
                <option aria-label="high priority" value="a" selected= {"a"===props.priority}>High</option>
                <option aria-label="medium priority" value="b" selected= {"b"===props.priority}>Med</option>
                <option aria-label="low priority" value="c" selected= {"c"===props.priority}>Low</option>
            </select>
        </div>
    </label>;
}

export default TaskItem;
