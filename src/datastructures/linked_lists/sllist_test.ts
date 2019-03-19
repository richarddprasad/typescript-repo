import SLList from './sllist';

const slist: SLList<number> = new SLList<number>();

function listStatus() {
    console.log("isEmpty?: ", slist.isEmpty());

}

listStatus();
