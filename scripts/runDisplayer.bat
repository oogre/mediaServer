
echo strating DISPLAYER
echo phase 1
cd "C:\Users\vince\Desktop\Les Brasseurs\media server\player\windows-amd64"
START /B /WAIT cmd /c start "screen" player.exe

echo phase 2
cd "C:\Users\vince\Desktop\Les Brasseurs\media server\spoutToScreen"
START /B /WAIT cmd /c start "%programfiles%\derivative\touchdesigner099\bin\touchdesigner099.exe" "spoutToScreen.toe"
TIMEOUT /t 10
echo DONE