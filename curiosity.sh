# Código creado por @gata_dios      

#!/data/data/com.termux/files/usr/bin/bash 
# Interpretación determinada para la ejecución     
COMANDOS = "pkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/Undefined17/CuriosityBot-MD\ncd CuriosityBot-MD\nyarn install\nnpm install\nnpm start"

echo -e "\e[35m
─█▀▀█ ───░█ ░█─░█ ░█▀▀▀█ ▀▀█▀▀ ░█▀▀▀ 　 ░█─── ─█▀▀█ 　 ░█▀▀█ ─█▀▀█ ░█▄─░█ ▀▀█▀▀ ─█▀▀█ ░█─── ░█─── ─█▀▀█ 
░█▄▄█ ─▄─░█ ░█─░█ ─▀▀▀▄▄ ─░█── ░█▀▀▀ 　 ░█─── ░█▄▄█ 　 ░█▄▄█ ░█▄▄█ ░█░█░█ ─░█── ░█▄▄█ ░█─── ░█─── ░█▄▄█ 
░█─░█ ░█▄▄█ ─▀▄▄▀ ░█▄▄▄█ ─░█── ░█▄▄▄ 　 ░█▄▄█ ░█─░█ 　 ░█─── ░█─░█ ░█──▀█ ─░█── ░█─░█ ░█▄▄█ ░█▄▄█ ░█─░█\n\e[0m" 

echo -e "\033[01;93m⏰ Preparando instalación...\n\033[0m"
echo -e "\033[01;32m\033[01m🚀 Instalando dependencias!!\n\033[0m" 
echo -e "\e[36m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▀▀ █ ▀█▀
█ █░▀█ █  ░█░ █▀█ █▄▄ █▄▄   █▄█ █ ░█░\n\e[0m"

if command -v git >/dev/null 2>&1; then
echo -e "\033[01;33m🟡 Git ya estaba instalado anteriormente.\033[0m"
else
if pkg install git -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install git -y 2>&1 >/dev/null)
echo -e "\033[0;31m⚠️ Error: $error\033[0m" 
echo -e "\033[0;34m⚠️ No se pudo instalar Git. Verifique su conexión a internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01m✅ Git se ha instalado correctamente.\n\033[0m" 
fi
fi
 
echo -e "\e[35m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▄░█ █▀█ █▀▄ █▀▀ ░ ░░█ █▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █░▀█ █▄█ █▄▀ ██▄ ▄ █▄█ ▄█\n\e[0m"

if command -v node >/dev/null 2>&1; then
echo -e "\033[01;33m🟡 Nodejs ya estaba instalado anteriormente.\033[0m"
else
if pkg install nodejs -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install nodejs -y 2>&1 >/dev/null)
echo -e "\033[0;31m⚠️ Error: $error\033[0m" 
echo -e "\033[0;34m⚠️ No se pudo instalar Node.js. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01m✅ Node.js se ha instalado correctamente.\n\033[0m" 
fi
fi

echo -e "\e[36m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▀▀ █▀▀ █▀▄▀█ █▀█ █▀▀ █▀▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █▀░ █▀░ █░▀░█ █▀▀ ██▄ █▄█\n\e[0m"

if command -v ffmpeg >/dev/null 2>&1; then
echo -e "\033[01;33m🟡 Ffmpeg ya estaba instalado anteriormente.\033[0m"
else
if pkg install ffmpeg -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install ffmpeg -y 2>&1 >/dev/null)
echo -e "\033[0;31m⚠️ Error: $error\033[0m" 
echo -e "\033[0;34m⚠️ No se pudo instalar FFmpeg. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01m✅ FFmpeg se ha instalado correctamente.\n\033[0m" 
fi
fi

echo -e "\e[35m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █ █▀▄▀█ ▄▀█ █▀▀ █▀▀ █▀▄▀█ ▄▀█ █▀▀ █ █▀▀ █▄▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █ █░▀░█ █▀█ █▄█ ██▄ █░▀░█ █▀█ █▄█ █ █▄▄ █░█\n\e[0m"

if command -v convert >/dev/null 2>&1; then
echo -e "\033[01;33m🟡 Imagemagick ya estaba instalado anteriormente.\033[0m"
else
if pkg install imagemagick -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install imagemagick -y 2>&1 >/dev/null)
echo -e "\033[0;31m⚠️ Error: $error\033[0m" 
echo -e "\033[0;34m⚠️ No se pudo instalar ImageMagick. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01m✅ ImageMagick se ha instalado correctamente.\n\033[0m" 
fi
fi

echo -e "\e[36m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▄█ ▄▀█ █▀█ █▄░█
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   ░█░ █▀█ █▀▄ █░▀█\n\e[0m"

if command -v yarn >/dev/null 2>&1; then
echo -e "\033[01;33m🟡 Yarn ya estaba instalado anteriormente.\033[0m"
else
if npm install -g yarn 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install -g yarn 2>&1 >/dev/null)
echo -e "\033[0;31m⚠️ Error: $error\033[0m" 
echo -e "\033[0;34m⚠️ No se pudo instalar Yarn. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01m✅ Yarn se ha instalado correctamente.\n\033[0m" 
fi
fi

echo -e "\e[36m
██╗██╗██╗
██║██║██║
██║██║██║
╚═╝╚═╝╚═╝
██╗██╗██╗
╚═╝╚═╝╚═╝ 

▀▀█▀▀ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 　 ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀█ ▀▀█▀▀ ▒█▀▀▀█ 
░▒█░░ ▒█░░▒█ ▒█░▒█ ▒█░░▒█ 　 ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█▄▄▀ ▒█▀▀▀ ▒█░░░ ░▒█░░ ▒█░░▒█ 
░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█ 　 ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█░▒█ ▒█▄▄▄ ▒█▄▄█ ░▒█░░ ▒█▄▄▄█

░█▀▀█ ▒█░░░ ▒█░░░ 　 ▒█▀▀█ ▀█▀ ▒█▀▀█ ▒█░▒█ ▀▀█▀▀ 
▒█▄▄█ ▒█░░░ ▒█░░░ 　 ▒█▄▄▀ ▒█░ ▒█░▄▄ ▒█▀▀█ ░▒█░░ 
▒█░▒█ ▒█▄▄█ ▒█▄▄█ 　 ▒█░▒█ ▄█▄ ▒█▄▄█ ▒█░▒█ ░▒█░░\n\e[0m"
echo -e "\033[01;32m\033[01m\n✅ Todas las dependencias se han instalado correctamente.\n\033[0m" 

echo -e "\e[35m
┈┈┈╲┈┈┈┈╱
┈┈┈╱▔▔▔▔╲
┈┈┃┈▇┈┈▇┈┃
╭╮┣━━━━━━┫╭╮
┃┃┃┈┈┈┈┈┈┃┃┃
╰╯┃┈┈┈┈┈┈┃╰╯
┈┈╰┓┏━━┓┏╯
┈┈┈╰╯┈┈╰╯ 

██╗░░██╗░░██╗░░  ██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
╚██╗░╚██╗░╚██╗░  ██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
░╚██╗░╚██╗░╚██╗  ██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
░██╔╝░██╔╝░██╔╝  ██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██╔╝░██╔╝░██╔╝░  ██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝░░╚═╝░░╚═╝░░  ╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝\n\e[0m"

echo -e "\033[1;35m"
git clone https://github.com/AzamiJs/CuriosityBot-MD.git
echo -e "\033[01;32m\033[01m✅ La clonación se ha descargado e instalado correctamente.\n\033[0m"

echo -e "\033[01;32m\033[01m🟢 Cambiando al directorio del repositorio!!\n\033[0m" 
cd CuriosityBot-MD

echo -e "\e[36m
█░█ █▀█ █▀▄ ▄▀█ ▀█▀ █▀▀   █▄█ ▄▀█ █▀█ █▄░█
█▄█ █▀▀ █▄▀ █▀█ ░█░ ██▄   ░█░ █▀█ █▀▄ █░▀█\n\e[0m"

echo -e "\033[0;34m🟡 Se actualizará yarn automáticamente. Esto puede tomar tiempo, Espere por favor.\n\033[0m"
if yarn install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(yarn install 2>&1 >/dev/null)
echo -e "\033[0;31m⚠️ Error: $error\033[0m" 
echo -e "\033[0;34m⚠️ No se pudo instalar yarn. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m" 
else
echo -e "\033[01;32m\033[01m✅ Yarn se ha actualizado correctamente.\n\033[0m" 
fi

echo -e "\e[35m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▄░█ █▀█ █▀▄▀█
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █░▀█ █▀▀ █░▀░█\n\e[0m"

echo -e "\033[0;34m🟡 Se instalará NPM automáticamente. Espere un momento por favor.\n\033[0m"
if npm install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install 2>&1 >/dev/null)
echo -e "\033[0;31m⚠️ Error: $error\033[0m" 
echo -e "\033[0;34m⚠️ No se pudo instalar NPM. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de manualmente.\033[0m" 
else
echo -e "\033[01;32m\033[01m✅ NPM se ha instalado correctamente..\n\033[0m" 
fi

clear
echo -e "\e[36m
░█▀▀█ ░█▀▀█ ─█▀▀█ ░█▀▀█ ▀█▀ ─█▀▀█ ░█▀▀▀█ 　 ░█▀▀█ ░█▀▀▀█ ░█▀▀█ 　 ░█▀▀▀█ ░█─░█ 
░█─▄▄ ░█▄▄▀ ░█▄▄█ ░█─── ░█─ ░█▄▄█ ─▀▀▀▄▄ 　 ░█▄▄█ ░█──░█ ░█▄▄▀ 　 ─▀▀▀▄▄ ░█─░█ 
░█▄▄█ ░█─░█ ░█─░█ ░█▄▄█ ▄█▄ ░█─░█ ░█▄▄▄█ 　 ░█─── ░█▄▄▄█ ░█─░█ 　 ░█▄▄▄█ ─▀▄▄▀ 

░█▀▀█ ░█▀▀█ ░█▀▀▀ ░█▀▀▀ ░█▀▀▀ ░█▀▀█ ░█▀▀▀ ░█▄─░█ ░█▀▀█ ▀█▀ ─█▀▀█ 
░█▄▄█ ░█▄▄▀ ░█▀▀▀ ░█▀▀▀ ░█▀▀▀ ░█▄▄▀ ░█▀▀▀ ░█░█░█ ░█─── ░█─ ░█▄▄█ 
░█─── ░█─░█ ░█▄▄▄ ░█─── ░█▄▄▄ ░█─░█ ░█▄▄▄ ░█──▀█ ░█▄▄█ ▄█▄ ░█─░█\n\e[0m"

echo -e "\e[31m
░░░░░░▄▄
░░░░░█░░█
▄▄▄▄▄█░░█▄▄▄
▓▓▓▓█░░░░░░░█
▓▓▓▓█░░░░░░░░█
▓▓▓▓█░░░░░░░░█
▓▓▓▓█░░░░░░░░█
███▀▀▀███████ \n\e[0m"
    
echo -e "\033[01;32m\033[01m🚀 Iniciando CuriosityBot-MD!!\n\033[0m"
npm start
