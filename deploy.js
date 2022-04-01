import { deploy, excludeDefaults } from "@samkirkland/ftp-deploy";
import 'dotenv/config'

async function deployMyCode() {
    console.log("🚚 Deploy started");
    await deploy({
        server: process.env.FTP_URL,
        username: process.env.FTP_USERNAME,
        password: process.env.FTP_PASSWORD,
        "local-dir": "./public/" ,
        "server-dir": process.env.FTP_FOLDER,
    });
    console.log("🚀 Deploy done!");
}

deployMyCode();