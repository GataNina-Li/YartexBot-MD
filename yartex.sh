# Código creado por @gata_dios
# Modificado por @AzamiJs

#!/data/data/com.termux/files/usr/bin/bash 
# Interpretación determinada para la ejecución     
COMANDOS = "pkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://https://github.com/VICTOREMANUEL2022/YartexBot-MD-V-CTOR-BOT-MD-/tree/patch-1\nyarn install\nnpm install\nnpm start"

echo -e "\e[38;5;123m
─█▀▀█ ───░█ ░█─░█ ░█▀▀▀█ ▀▀█▀▀ ░█▀▀▀ 　 ░█─── ─█▀▀█ 　 ░█▀▀█ ─█▀▀█ ░█▄─░█ ▀▀█▀▀ ─█▀▀█ ░█─── ░█─── ─█▀▀█ 
░█▄▄█ ─▄─░█ ░█─░█ ─▀▀▀▄▄ ─░█── ░█▀▀▀ 　 ░█─── ░█▄▄█ 　 ░█▄▄█ ░█▄▄█ ░█░█░█ ─░█── ░█▄▄█ ░█─── ░█─── ░█▄▄█ 
░█─░█ ░█▄▄█ ─▀▄▄▀ ░█▄▄▄█ ─░█── ░█▄▄▄ 　 ░█▄▄█ ░█─░█ 　 ░█─── ░█─░█ ░█──▀█ ─░█── ░█─░█ ░█▄▄█ ░█▄▄█ ░█─░█\n\e[0m" 

echo -e "\033[1;38;5;79mEmpezando instalación...\n\033[0m"
echo -e "\033[38;5;165m\033[01mInstalando dependencias!!\n\033[0m" 
echo -e "\e[38;5;49m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▀▀ █ ▀█▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █▄█ █ ░█░\n\e[0m"

if command -v git >/dev/null 2>&1; then
echo -e "\033[1;38;5;3m\033[1mGit ya estaba instalado anteriormente.\033[0m"
else
if pkg install git -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install git -y 2>&1 >/dev/null)
echo -e "\033[1;38;5;196m\033[1mError: $error\033[0m"
echo -e "\033[0;34m\033[1mNo se pudo instalar Git. Verifique su conexión a internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m"
echo -e "\033[01;33m\033[1m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[1;38;5;2m\033[01mGit se ha instalado correctamente.\n\033[0m" 
fi
fi

echo -e "\e[38;5;206m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▄░█ █▀█ █▀▄ █▀▀ ░ ░░█ █▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █░▀█ █▄█ █▄▀ ██▄ ▄ █▄█ ▄█\n\e[0m"

if command -v node >/dev/null 2>&1; then
echo -e "\033[1;38;5;3m\033[1mNodejs ya estaba instalado anteriormente.\033[0m"
else
if pkg install nodejs -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install nodejs -y 2>&1 >/dev/null)
echo -e "\033[1;38;5;196m\033[1mError: $error\033[0m"
echo -e "\033[0;34m\033[1mNo se pudo instalar Node.js. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m"
echo -e "\033[01;33m\033[1m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[1;38;5;2m\033[01mNode.js se ha instalado correctamente.\n\033[0m" 
fi
fi

echo -e "\e[38;5;49m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▀▀ █▀▀ █▀▄▀█ █▀█ █▀▀ █▀▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █▀░ █▀░ █░▀░█ █▀▀ ██▄ █▄█\n\e[0m"

if command -v ffmpeg >/dev/null 2>&1; then
echo -e "\033[1;38;5;3m\033[1mFfmpeg ya estaba instalado anteriormente.\033[0m"
else
if pkg install ffmpeg -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install ffmpeg -y 2>&1 >/dev/null)
echo -e "\033[1;38;5;196m\033[1mError: $error\033[0m"
echo -e "\033[0;34m\033[1mNo se pudo instalar FFmpeg. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m"
echo -e "\033[01;33m\033[1m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[1;38;5;2m\033[01mFFmpeg se ha instalado correctamente.\n\033[0m" 
fi
fi

echo -e "\e[38;5;206m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █ █▀▄▀█ ▄▀█ █▀▀ █▀▀ █▀▄▀█ ▄▀█ █▀▀ █ █▀▀ █▄▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █ █░▀░█ █▀█ █▄█ ██▄ █░▀░█ █▀█ █▄█ █ █▄▄ █░█\n\e[0m"

if command -v convert >/dev/null 2>&1; then
echo -e "\033[1;38;5;3m\033[1mImagemagick ya estaba instalado anteriormente.\033[0m"
else
if pkg install imagemagick -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install imagemagick -y 2>&1 >/dev/null)
echo -e "\033[1;38;5;196m\033[1mError: $error\033[0m"
echo -e "\033[0;34m\033[1mNo se pudo instalar ImageMagick. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m"
echo -e "\033[01;33m\033[1m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[1;38;5;2m\033[01mImageMagick se ha instalado correctamente.\n\033[0m" 
fi
fi

echo -e "\e[38;5;49m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▄█ ▄▀█ █▀█ █▄░█
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   ░█░ █▀█ █▀▄ █░▀█\n\e[0m"

if command -v yarn >/dev/null 2>&1; then
echo -e "\033[1;38;5;3m\033[1mYarn ya estaba instalado anteriormente.\033[0m"
else
if npm install -g yarn 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install -g yarn 2>&1 >/dev/null)
echo -e "\033[1;38;5;196m\033[1mError: $error\033[0m"
echo -e "\033[0;34m\033[1mNo se pudo instalar Yarn. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m"
echo -e "\033[01;33m\033[1m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[1;38;5;2m\033[01mYarn se ha instalado correctamente.\n\033[0m" 
fi
fi

echo -e "\033[38;5;266m
▀▀█▀▀ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 　 ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀█ ▀▀█▀▀ ▒█▀▀▀█ 
░▒█░░ ▒█░░▒█ ▒█░▒█ ▒█░░▒█ 　 ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█▄▄▀ ▒█▀▀▀ ▒█░░░ ░▒█░░ ▒█░░▒█ 
░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█ 　 ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█░▒█ ▒█▄▄▄ ▒█▄▄█ ░▒█░░ ▒█▄▄▄█\e[0m"
echo -e "\033[38;5;183m\033[01mTodas las dependencias se han instalado correctamente.\n\033[0m" 

echo -e "\e[38;5;81m
██╗░░██╗░░██╗░░  ██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
╚██╗░╚██╗░╚██╗░  ██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
░╚██╗░╚██╗░╚██╗  ██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
░██╔╝░██╔╝░██╔╝  ██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██╔╝░██╔╝░██╔╝░  ██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝░░╚═╝░░╚═╝░░  ╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝\n\e[0m"

echo -e "\033[38;5;188m"
git clone https://github.com/VICTOREMANUEL2022/YartexBot-MD-V-CTOR-BOT-MD-/tree/patch-1.git
echo -e "\033[38;5;51m\033[01mLa clonación se ha descargado e instalado correctamente.\n\033[0m"

echo -e "\033[1;38;5;171mCambiando al directorio del repositorio!!\n\033[0m"
cd YartexBot-MD

echo -e "\e[38;5;111m
█░█ █▀█ █▀▄ ▄▀█ ▀█▀ █▀▀   █▄█ ▄▀█ █▀█ █▄░█
█▄█ █▀▀ █▄▀ █▀█ ░█░ ██▄   ░█░ █▀█ █▀▄ █░▀█\n\e[0m"

echo -e "\033[1;38;5;229m\033[1mSe actualizará yarn automáticamente. Esto puede tomar tiempo, Espere por favor.\n\033[0m"
if yarn install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(yarn install 2>&1 >/dev/null)
echo -e "\033[1;38;5;196m\033[1mError: $error\033[0m"
echo -e "\033[0;34m\033[1mNo se pudo instalar yarn. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m"
else
echo -e "\033[1;38;5;2m\033[01mYarn se ha actualizado correctamente.\n\033[0m"
fi

clear
echo -e "\e[38;38;5;69m
██╗███╗░░██╗██╗░█████╗░██╗░█████╗░███╗░░██╗██████╗░░█████╗░
██║████╗░██║██║██╔══██╗██║██╔══██╗████╗░██║██╔══██╗██╔══██╗
██║██╔██╗██║██║██║░░╚═╝██║███████║██╔██╗██║██║░░██║██║░░██║
██║██║╚████║██║██║░░██╗██║██╔══██║██║╚████║██║░░██║██║░░██║
██║██║░╚███║██║╚█████╔╝██║██║░░██║██║░╚███║██████╔╝╚█████╔╝
╚═╝╚═╝░░╚══╝╚═╝░╚════╝░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░░╚════╝░

██╗░░░██╗░█████╗░██████╗░████████╗███████╗██╗░░██╗██████╗░░█████╗░████████╗░░░░░░███╗░░░███╗██████╗░
╚██╗░██╔╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝╚██╗██╔╝██╔══██╗██╔══██╗╚══██╔══╝░░░░░░████╗░████║██╔══██╗
░╚████╔╝░███████║██████╔╝░░░██║░░░█████╗░░░╚███╔╝░██████╦╝██║░░██║░░░██║░░░█████╗██╔████╔██║██║░░██║
░░╚██╔╝░░██╔══██║██╔══██╗░░░██║░░░██╔══╝░░░██╔██╗░██╔══██╗██║░░██║░░░██║░░░╚════╝██║╚██╔╝██║██║░░██║
░░░██║░░░██║░░██║██║░░██║░░░██║░░░███████╗██╔╝╚██╗██████╦╝╚█████╔╝░░░██║░░░░░░░░░██║░╚═╝░██║██████╔╝
░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═════╝░░╚════╝░░░░╚═╝░░░░░░░░░╚═╝░░░░░╚═╝╚═════╝░\n\e[0m"
npm start
