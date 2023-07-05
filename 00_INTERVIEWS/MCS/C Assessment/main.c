// Please review the sample “C” program below and answer the following questions.

#define RO_OFF 0
#define RO_ON 1
#define Temp_Sensor 0
#define Pressure_Sensor 1
#define Max_Sensors 2
#define Temp_control 0x80
#define Pressure_control 0x00

Byte control_bit = 0x3F;
Byte control_mode;
Byte relay_output[2] = {
  RO_ON,
  RO_OFF
};
Byte * control_mode_ptr;

Struct {
  Byte type;
  Int value;
}

sensor[Max_Sensors];

for (loop = 0; loop < Max_Sensors; loop++) {
  sensor[loop].type = loop;
  sensor[loop].value = 50 * (loop + 1);
}

if ((control_bit & 0x80) == Temp_control) {
    control_mode = Temp_control;
} else {
  control_mode = Pressure_control;  
  control_mode_ptr = &control_mode;
}


// 1. What is the value in control mode after the program runs?
0x00

// 2. What is the value in sensor[0].type?
0

// 3. What is the value in sensor[1].type?
1

// 4. What is the value of relay_output[0]?
1

// 5. Write a statement to test relay_output equal to ON.
if (relay_output[0] == RO_ON) {
    // Code
}

// 6. What is the value of “*control_mode_ptr”?
0x00

// 7. What is the value of “control_mode_ptr”?
Memory address of control_mode variable