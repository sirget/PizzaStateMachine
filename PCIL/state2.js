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
            ขอบชีส : 'พิซซ่าขอบชีส',
            ขอบไส้กรอก : 'พิซซ่าขอบไส้กรอก',
            ซีฟู้ด : 'Start_state',
            ฮาวายเอี้ยน : 'Start_state',
            ดับเบิ้ลชีส : 'Start_state',
            เพิ่มชีส : 'Start_state',
            Confirm : 'Start_state',
            Reset : 'Start_state',
            key : 0
        },
        พิซซ่าขอบชีส : {
            name : 'พิซซ่าขอบชีส',
            ขอบชีส : 'พิซซ่าขอบชีส',
            ขอบไส้กรอก : 'พิซซ่าขอบไส้กรอก',
            ซีฟู้ด : 'หน้าซีฟู้ดขอบชีส',
            ฮาวายเอี้ยน : 'หน้าฮาวายเอี้ยนขอบชีส',
            ดับเบิ้ลชีส : 'หน้าดับเบิ้ลชีสขอบชีส',
            เพิ่มชีส : 'พิซซ่าขอบชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 1
        },
        พิซซ่าขอบไส้กรอก : {
            name : 'พิซซ่าขอบไส้กรอก',
            ขอบชีส : 'พิซซ่าขอบชีส',
            ขอบไส้กรอก : 'พิซซ่าขอบไส้กรอก',
            ซีฟู้ด : 'หน้าซีฟู้ดขอบไส้กรอก',
            ฮาวายเอี้ยน : 'หน้าฮาวายเอี้ยนขอบไส้กรอก',
            ดับเบิ้ลชีส : 'หน้าดับเบิ้ลชีสขอบไส้กรอก',
            เพิ่มชีส : 'พิซซ่าขอบไส้กรอก',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 2
        },
        หน้าซีฟู้ดขอบชีส :{
            name : 'หน้าซีฟู้ดขอบชีส',
            ขอบชีส : 'หน้าซีฟู้ดขอบชีส',
            ขอบไส้กรอก : 'หน้าซีฟู้ดขอบไส้กรอก',
            ซีฟู้ด : 'พิซซ่าขอบชีส',
            ฮาวายเอี้ยน : 'หน้าฮาวายเอี้ยนขอบชีส',
            ดับเบิ้ลชีส : 'หน้าดับเบิ้ลชีสขอบชีส',
            เพิ่มชีส : 'ซีฟู้ดขอบชีสเพิ่มชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 3
        },
        หน้าฮาวายเอี้ยนขอบชีส : {
            name : 'หน้าฮาวายเอี้ยนขอบชีส',
            ขอบชีส : 'หน้าฮาวายเอี้ยนขอบชีส',
            ขอบไส้กรอก : 'หน้าฮาวายเอี้ยนขอบไส้กรอก',
            ซีฟู้ด : 'หน้าซีฟู้ดขอบชีส',
            ฮาวายเอี้ยน : 'พิซซ่าขอบชีส',
            ดับเบิ้ลชีส : 'หน้าดับเบิ้ลชีสขอบชีส',
            เพิ่มชีส : 'ฮาวายเอี่ยนขอบชีสเพิ่มชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 4
        },
        หน้าดับเบิ้ลชีสขอบชีส : {
            name : 'หน้าดับเบิ้ลชีสขอบชีส',
            ขอบชีส : 'หน้าดับเบิ้ลชีสขอบชีส',
            ขอบไส้กรอก : 'หน้าดับเบิ้ลชีสขอบไส้กรอก',
            ซีฟู้ด : 'หน้าซีฟู้ดขอบชีส',
            ฮาวายเอี้ยน : 'หน้าฮาวายเอี้ยนขอบชีส',
            ดับเบิ้ลชีส : 'พิซซ่าขอบชีส',
            เพิ่มชีส : 'หน้าดับเบิ้ลชีสขอบชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 5
        },
        หน้าซีฟู้ดขอบไส้กรอก : {
            name : 'หน้าซีฟู้ดขอบไส้กรอก',
            ขอบชีส : 'หน้าซีฟู้ดขอบชีส',
            ขอบไส้กรอก : 'หน้าซีฟู้ดขอบไส้กรอก',
            ซีฟู้ด : 'พิซซ่าขอบไส้กรอก',
            ฮาวายเอี้ยน : 'หน้าฮาวายเอี้ยนขอบไส้กรอก',
            ดับเบิ้ลชีส : 'หน้าดับเบิ้ลชีสขอบไส้กรอก',
            เพิ่มชีส : 'ซีฟู้ดขอบไส้กรอกเพิ่มชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 6
        },
        หน้าฮาวายเอี้ยนขอบไส้กรอก : {
            name : 'หน้าฮาวายเอี้ยนขอบไส้กรอก',
            ขอบชีส : 'หน้าฮาวายเอี้ยนขอบชีส',
            ขอบไส้กรอก : 'หน้าฮาวายเอี้ยนขอบไส้กรอก',
            ซีฟู้ด : 'หน้าซีฟู้ดขอบไส้กรอก',
            ฮาวายเอี้ยน : 'พิซซ่าขอบไส้กรอก',
            ดับเบิ้ลชีส : 'หน้าดับเบิ้ลชีสขอบไส้กรอก',
            เพิ่มชีส : 'ฮาวายเอี้ยนขอบไส้กรอกเพิ่มชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 7
        },
        หน้าดับเบิ้ลชีสขอบไส้กรอก : {
            name : 'หน้าดับเบิ้ลชีสขอบไส้กรอก',
            ขอบชีส : 'หน้าดับเบิ้ลชีสขอบชีส',
            ขอบไส้กรอก : 'หน้าดับเบิ้ลชีสขอบไส้กรอก',
            ซีฟู้ด : 'หน้าซีฟู้ดขอบไส้กรอก',
            ฮาวายเอี้ยน : 'หน้าฮาวายเอี้ยนขอบไส้กรอก',
            ดับเบิ้ลชีส : 'พิซซ่าขอบไส้กรอก',
            เพิ่มชีส : 'หน้าดับเบิ้ลชีสขอบไส้กรอก',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 8
        },
        ซีฟู้ดขอบชีสเพิ่มชีส : {
            name : 'ซีฟู้ดขอบชีสเพิ่มชีส',
            ขอบชีส : 'ซีฟู้ดขอบชีสเพิ่มชีส',
            ขอบไส้กรอก : 'ซีฟู้ดขอบไส้กรอกเพิ่มชีส',
            ซีฟู้ด : 'ซีฟู้ดขอบชีสเพิ่มชีส',
            ฮาวายเอี้ยน : 'ฮาวายเอี่ยนขอบชีสเพิ่มชีส',
            ดับเบิ้ลชีส : 'ซีฟู้ดขอบชีสเพิ่มชีส',
            เพิ่มชีส : 'หน้าซีฟู้ดขอบชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 9
        },
        ฮาวายเอี่ยนขอบชีสเพิ่มชีส : {
            name : 'ฮาวายเอี่ยนขอบชีสเพิ่มชีส',
            ขอบชีส : 'ฮาวายเอี่ยนขอบชีสเพิ่มชีส',
            ขอบไส้กรอก : 'ฮาวายเอี้ยนขอบไส้กรอกเพิ่มชีส',
            ซีฟู้ด : 'ซีฟู้ดขอบชีสเพิ่มชีส',
            ฮาวายเอี้ยน : 'ฮาวายเอี่ยนขอบชีสเพิ่มชีส',
            ดับเบิ้ลชีส : 'ฮาวายเอี่ยนขอบชีสเพิ่มชีส',
            เพิ่มชีส : 'หน้าฮาวายเอี้ยนขอบชีส',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 10
        },
        ซีฟู้ดขอบไส้กรอกเพิ่มชีส : {
            name : 'ซีฟู้ดขอบไส้กรอกเพิ่มชีส',
            ขอบชีส : 'ซีฟู้ดขอบชีสเพิ่มชีส',
            ขอบไส้กรอก : 'ซีฟู้ดขอบไส้กรอกเพิ่มชีส',
            ซีฟู้ด : 'ซีฟู้ดขอบไส้กรอกเพิ่มชีส',
            ฮาวายเอี้ยน : 'ฮาวายเอี้ยนขอบไส้กรอกเพิ่มชีส',
            ดับเบิ้ลชีส : 'ซีฟู้ดขอบไส้กรอกเพิ่มชีส',
            เพิ่มชีส : 'หน้าซีฟู้ดขอบไส้กรอก',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 11
        },
        ฮาวายเอี้ยนขอบไส้กรอกเพิ่มชีส : {
            name : 'ฮาวายเอี้ยนขอบไส้กรอกเพิ่มชีส',
            ขอบชีส : 'ซีฟู้ดขอบชีสเพิ่มชีส',
            ขอบไส้กรอก : 'ฮาวายเอี้ยนขอบไส้กรอกเพิ่มชีส',
            ซีฟู้ด : 'ซีฟู้ดขอบไส้กรอกเพิ่มชีส',
            ฮาวายเอี้ยน : 'ฮาวายเอี้ยนขอบไส้กรอกเพิ่มชีส',
            ดับเบิ้ลชีส : 'ฮาวายเอี้ยนขอบไส้กรอกเพิ่มชีส',
            เพิ่มชีส : 'หน้าฮาวายเอี้ยนขอบไส้กรอก',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 12
        },
        Confirm : {
            name : 'Confirm',
            ขอบชีส : 'Trap_state',
            ขอบไส้กรอก : 'Trap_state',
            ซีฟู้ด : 'Trap_state',
            ฮาวายเอี้ยน : 'Trap_state',
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
            ฮาวายเอี้ยน : 'Trap_state',
            ดับเบิ้ลชีส : 'Trap_state',
            เพิ่มชีส : 'Trap_state',
            Confirm : 'Trap_state',
            Reset : 'Trap_state',
            key : 14
        }

    },
    getNext : function (taget) {
        let next = this.StateMetrix[this.current_State.name][taget]
        return {name : next , key : this.StateMetrix[next].key}
    },
    setCurrentState : function (next) {
        this.current_State = next
    }
}