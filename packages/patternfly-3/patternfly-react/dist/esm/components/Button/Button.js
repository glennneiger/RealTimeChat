import Button from 'react-bootstrap/es/Button';

import ButtonGroup from './ButtonGroup';
import DropdownButton from './DropdownButton';
import SplitButton from './SplitButton';

Button.Dropdown = DropdownButton;
Button.Group = ButtonGroup;
Button.Split = SplitButton;

export default Button;