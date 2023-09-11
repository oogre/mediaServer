@echo off

rem echo strating QuickShow
rem START /B /WAIT cmd /c "runQuickShow.ahk"
rem echo DONE

START /B /WAIT cmd /c "runOBS.bat"

START /B /WAIT cmd /c "runCommunication.bat"

START /B /WAIT cmd /c "runDisplayer.bat"

