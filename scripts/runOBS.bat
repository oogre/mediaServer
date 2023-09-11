echo strating OBS
cd "C:\Program Files\obs-studio\bin\64bit\"
START "OBS" obs64.exe --profile "laMontagneLiquide" --collection "lesBrasseurs" --disable-updater --scene "pentura" -m --websocket_port 2222
TIMEOUT /t 3
START "OBS" obs64.exe --profile "laMontagneLiquide" --collection "lesBrasseurs" --disable-updater --scene "bave noire" -m --websocket_port 3333
TIMEOUT /t 3
START "OBS" obs64.exe --profile "laMontagneLiquide" --collection "lesBrasseurs" --disable-updater --scene "wallpaper" -m --websocket_port 4444
TIMEOUT /t 3
echo DONE

