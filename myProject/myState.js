let machine = {
    current_State:  {
        name : 'Start_state',
        key : 0
    },
    prev_State : {
        name : 'none',
        key : -1
    },
    input_String: [],
    StateMetrix : {
        Start_state : {
            name : 'Start_state',
            ขอบชีส : 'ขอบชีส',
            ขอบไส้กรอก : 'ขอบไส้กรอก',
            ซีฟู้ด : 'Start_state',
            ฮาวายเอียน : 'Start_state',
            ดับเบิ้ลชีส : 'Start_state',
            เพิ่มชีส : 'Start_state',
            Confirm : 'Start_state',
            Reset : 'Start_state',
            key : 0
        },
        ขอบชีส : {
            name : 'ขอบชีส',
            ขอบชีส : 'ขอบชีส',
            ขอบไส้กรอก : 'ขอบไส้กรอก',
            ซีฟู้ด : 'ซีฟู้ด_ขอบชีส',
            ฮาวายเอียน : 'ฮาวายเอียน_ขอบชีส',
            ดับเบิ้ลชีส : 'ดับเบิ้ลชีส_ขอบชีส',
            เพิ่มชีส : 'ขอบชีส',
            Confirm : 'ขอบชีส',
            Reset : 'Start_state',
            key : 1
        },
        ขอบไส้กรอก : {
            name : 'ขอบไส้กรอก',
            ขอบชีส : 'ขอบชีส',
            ขอบไส้กรอก : 'ขอบไส้กรอก',
            ซีฟู้ด : 'ซีฟู้ด_ขอบไส้กรอก',
            ฮาวายเอียน : 'ฮาวายเอียน_ขอบไส้กรอก',
            ดับเบิ้ลชีส : 'ดับเบิ้ลชีส_ขอบไส้กรอก',
            เพิ่มชีส : 'ขอบไส้กรอก',
            Confirm : 'ขอบไส้กรอก',
            Reset : 'Start_state',
            key : 2
        },
        ฮาวายเอียน_ขอบชีส : {
            name : 'ฮาวายเอียน_ขอบชีส',
            ขอบชีส : 'ฮาวายเอียน_ขอบชีส',
            ขอบไส้กรอก : 'ฮาวายเอียน_ขอบไส้กรอก',
            ซีฟู้ด : 'ซีฟู้ด_ขอบชีส',
            ฮาวายเอียน : 'ขอบชีส',
            ดับเบิ้ลชีส : 'ดับเบิ้ลชีส_ขอบชีส',
            เพิ่มชีส : 'ฮาวายเอียน_ขอบชีส_เพิ่มชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 3
        },
        ซีฟู้ด_ขอบชีส :{
            name : 'ซีฟู้ด_ขอบชีส',
            ขอบชีส : 'ซีฟู้ด_ขอบชีส',
            ขอบไส้กรอก : 'ซีฟู้ด_ขอบไส้กรอก',
            ซีฟู้ด : 'ขอบชีส',
            ฮาวายเอียน : 'ฮาวายเอียน_ขอบชีส',
            ดับเบิ้ลชีส : 'ดับเบิ้ลชีส_ขอบชีส',
            เพิ่มชีส : 'ซีฟู้ด_ขอบชีส_เพิ่มชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 4
        },
        ดับเบิ้ลชีส_ขอบชีส : {
            name : 'ดับเบิ้ลชีส_ขอบชีส',
            ขอบชีส : 'ดับเบิ้ลชีส_ขอบชีส',
            ขอบไส้กรอก : 'ดับเบิ้ลชีส_ขอบไส้กรอก',
            ซีฟู้ด : 'ซีฟู้ด_ขอบชีส',
            ฮาวายเอียน : 'ฮาวายเอียน_ขอบชีส',
            ดับเบิ้ลชีส : 'ขอบชีส',
            เพิ่มชีส : 'ดับเบิ้ลชีส_ขอบชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 5
        },
        ฮาวายเอียน_ขอบไส้กรอก : {
            name : 'ฮาวายเอียน_ขอบไส้กรอก',
            ขอบชีส : 'ฮาวายเอียน_ขอบชีส',
            ขอบไส้กรอก : 'ฮาวายเอียน_ขอบไส้กรอก',
            ซีฟู้ด : 'ซีฟู้ด_ขอบไส้กรอก',
            ฮาวายเอียน : 'ขอบไส้กรอก',
            ดับเบิ้ลชีส : 'ดับเบิ้ลชีส_ขอบไส้กรอก',
            เพิ่มชีส : 'ฮาวายเอียน_ขอบไส้กรอก_เพิ่มชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 6
        },
        ซีฟู้ด_ขอบไส้กรอก : {
            name : 'ซีฟู้ด_ขอบไส้กรอก',
            ขอบชีส : 'ซีฟู้ด_ขอบชีส',
            ขอบไส้กรอก : 'ซีฟู้ด_ขอบไส้กรอก',
            ซีฟู้ด : 'ขอบไส้กรอก',
            ฮาวายเอียน : 'ฮาวายเอียน_ขอบไส้กรอก',
            ดับเบิ้ลชีส : 'ดับเบิ้ลชีส_ขอบไส้กรอก',
            เพิ่มชีส : 'ซีฟู้ด_ขอบไส้กรอก_เพิ่มชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 7
        },
        ดับเบิ้ลชีส_ขอบไส้กรอก : {
            name : 'ดับเบิ้ลชีส_ขอบไส้กรอก',
            ขอบชีส : 'ดับเบิ้ลชีส_ขอบชีส',
            ขอบไส้กรอก : 'ดับเบิ้ลชีส_ขอบไส้กรอก',
            ซีฟู้ด : 'ซีฟู้ด_ขอบไส้กรอก',
            ฮาวายเอียน : 'ฮาวายเอียน_ขอบไส้กรอก',
            ดับเบิ้ลชีส : 'ขอบไส้กรอก',
            เพิ่มชีส : 'ดับเบิ้ลชีส_ขอบไส้กรอก',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 8
        },
        ฮาวายเอียน_ขอบชีส_เพิ่มชีส : {
            name : 'ฮาวายเอียน_ขอบชีส_เพิ่มชีส',
            ขอบชีส : 'ฮาวายเอียน_ขอบชีส_เพิ่มชีส',
            ขอบไส้กรอก : 'ฮาวายเอียน_ขอบไส้กรอก_เพิ่มชีส',
            ซีฟู้ด : 'ซีฟู้ด_ขอบชีส_เพิ่มชีส',
            ฮาวายเอียน : 'ฮาวายเอียน_ขอบชีส_เพิ่มชีส',
            ดับเบิ้ลชีส : 'ฮาวายเอียน_ขอบชีส_เพิ่มชีส',
            เพิ่มชีส : 'ฮาวายเอียน_ขอบชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 9
        },
        ซีฟู้ด_ขอบชีส_เพิ่มชีส : {
            name : 'ซีฟู้ด_ขอบชีส_เพิ่มชีส',
            ขอบชีส : 'ซีฟู้ด_ขอบชีส_เพิ่มชีส',
            ขอบไส้กรอก : 'ซีฟู้ด_ขอบไส้กรอก_เพิ่มชีส',
            ซีฟู้ด : 'ซีฟู้ด_ขอบชีส_เพิ่มชีส',
            ฮาวายเอียน : 'ฮาวายเอียน_ขอบชีส_เพิ่มชีส',
            ดับเบิ้ลชีส : 'ซีฟู้ด_ขอบชีส_เพิ่มชีส',
            เพิ่มชีส : 'ซีฟู้ด_ขอบชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 10
        },
        ฮาวายเอียน_ขอบไส้กรอก_เพิ่มชีส : {
            name : 'ฮาวายเอียน_ขอบไส้กรอก_เพิ่มชีส',
            ขอบชีส : 'ซีฟู้ด_ขอบชีส_เพิ่มชีส',
            ขอบไส้กรอก : 'ฮาวายเอียน_ขอบไส้กรอก_เพิ่มชีส',
            ซีฟู้ด : 'ซีฟู้ด_ขอบไส้กรอก_เพิ่มชีส',
            ฮาวายเอียน : 'ฮาวายเอียน_ขอบไส้กรอก_เพิ่มชีส',
            ดับเบิ้ลชีส : 'ฮาวายเอียน_ขอบไส้กรอก_เพิ่มชีส',
            เพิ่มชีส : 'ฮาวายเอียน_ขอบไส้กรอก',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 11
        },
        ซีฟู้ด_ขอบไส้กรอก_เพิ่มชีส : {
            name : 'ซีฟู้ด_ขอบไส้กรอก_เพิ่มชีส',
            ขอบชีส : 'ซีฟู้ด_ขอบชีส_เพิ่มชีส',
            ขอบไส้กรอก : 'ซีฟู้ด_ขอบไส้กรอก_เพิ่มชีส',
            ซีฟู้ด : 'ซีฟู้ด_ขอบไส้กรอก_เพิ่มชีส',
            ฮาวายเอียน : 'ฮาวายเอียน_ขอบไส้กรอก_เพิ่มชีส',
            ดับเบิ้ลชีส : 'ซีฟู้ด_ขอบไส้กรอก_เพิ่มชีส',
            เพิ่มชีส : 'ซีฟู้ด_ขอบไส้กรอก',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 12
        },
        Confirm : {
            name : 'Confirm',
            ขอบชีส : 'Trap_state',
            ขอบไส้กรอก : 'Trap_state',
            ซีฟู้ด : 'Trap_state',
            ฮาวายเอียน : 'Trap_state',
            ดับเบิ้ลชีส : 'Trap_state',
            เพิ่มชีส : 'Trap_state',
            Confirm : 'Trap_state',
            Reset : 'Trap_state',
            key : 13
        },
        Trap_state : {
            name : 'Trap_state',
            ขอบชีส : 'Trap_state',
            ขอบไส้กรอก : 'Trap_state',
            ซีฟู้ด : 'Trap_state',
            ฮาวายเอียน : 'Trap_state',
            ดับเบิ้ลชีส : 'Trap_state',
            เพิ่มชีส : 'Trap_state',
            Confirm : 'Trap_state',
            Reset : 'Trap_state',
            key : 14
        }

    },
    getNext : function (target) {
        let next = this.StateMetrix[this.current_State.name][target]
        return {name : next , key : this.StateMetrix[next].key}
    },
    setCurrentState : function (next) {
        this.current_State = next
    }
}