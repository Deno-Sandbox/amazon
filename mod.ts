export class Amazon {
    public async isOnline(){
        try {
            let req = await fetch('https://www.amazon.com/');
            if (req.status === 200) {
                return true;
            }
        } catch (error) {}
        return false;
    }
}