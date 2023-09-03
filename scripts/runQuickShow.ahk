targetcolor := 0x91F6AB
MouseX := 2000
MouseY := 60
WinGet, original, ID, A

Run, "C:\Users\vince\Desktop\Les Brasseurs\laser\tabernacle.QSW"
while !WinExist("QuickShow")
	Sleep 100
WinActivate ;

Sleep 5000
WinMaximize
Sleep 500

Send, {Enter down}
Send, {Enter up}

MouseMove,  %MouseX%, %MouseY%
Sleep 1000
Click 
Sleep 300

MouseGetPos, MouseX, MouseY
PixelGetColor, color, %MouseX%, %MouseY%

if (color != targetcolor)
{
	while WinExist("QuickShow")
	{
		Sleep 1000
		Send, {Enter down}
		Send, {Enter up}
		Sleep 1000
		Click 
		Sleep 300
		MouseGetPos, MouseX, MouseY
		PixelGetColor, color, %MouseX%, %MouseY%
		; MsgBox The color at the current cursor position is %color%.
		if (color = targetcolor)
		{
			break
		}
	}	
}

if WinExist("QuickShow")
	WinRestore

WinActivate, ahk_id %original%
Sleep 1000

