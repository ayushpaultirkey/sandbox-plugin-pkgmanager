import path from "path";
import fs from "fs/promises";
import directory from "../../library/directory.js";

const { __packages } = directory();

async function getMetadata(id) {
    try {

        const meta = await fs.readFile(path.join(__packages, id, "metadata.json"));
        const metaJSON = JSON.parse(meta);

        return metaJSON;

    }
    catch(error) {
        console.log(error);
        throw error;
    }
}

async function getIcon(id) {
    try {

        const icon = await fs.readFile(path.join(__packages, id, "favicon.png"));
        return icon;

    }
    catch(error) {
        console.log(error);
        throw error;
    }
}

export default { getMetadata, getIcon }