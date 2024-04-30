import { useState } from "react";

const [hide, setHide] = useState(false)
let className = 'form';
if (hide) {
    className += ' hide'
}
