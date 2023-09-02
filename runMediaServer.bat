@echo off

echo strating QuickShow
START /B /WAIT cmd /c "runQuickShow.ahk"
echo DONE

echo strating COMMUNICATION
cd "C:\Users\vince\Desktop\Les Brasseurs\media server\midi2OBS"
START /B cmd /c "node lazerController.js"
echo DONE

echo strating OBS
cd "C:\Program Files\obs-studio\bin\64bit\"
START "OBS" obs64.exe --scene "pentura" -m --websocket_port 4444
START "OBS" obs64.exe --scene "bave noire" -m --websocket_port 3333
START "OBS" obs64.exe --scene "wallpaper" -m --websocket_port 2222
TIMEOUT /t 10
echo DONE

echo strating DISPLAY
cd "C:\Users\vince\Desktop\Les Brasseurs\media server\player\windows-amd64"
START /B /WAIT cmd /c start "screen" player.exe
echo DONE

