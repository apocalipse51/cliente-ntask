exports.render = () => {
    return `
        <form>
            <div class="list">
                <label class="item item-input item-stacked-label">
                    <span class="input-label">Tarefas</span>
                    <input type="text" data-task>
                </label>
            </div>
            <div class="padding">
                <button class="button button-positive button-block">
                    <i class="ion-compose"></i> Salvar
                </button>
            </div>
        </form>
    `;
};