WinGet, original, ID, A

Run, "C:\Users\vince\Desktop\Les Brasseurs\laser\tabernacle.QSW"
while !WinExist("QuickShow")
	Sleep 100
WinActivate ;

Sleep 5000
WinMaximize
Sleep 5000
MouseMove, 3605, 60

Sleep 1000
Click 
Sleep 300

WinRestore

WinActivate, ahk_id %original%
Sleep 1000

