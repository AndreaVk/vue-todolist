const app = new Vue({
    el: '#root',
    data: {
    inputText: '',
    list: [
        {
        text: 'Fare la spesa',
        notDone: true,
        },
        {
        text: 'Portare fuori il cane',
        notDone: false,
        },
        {
        text: 'Cucinare il pranzo',
        notDone: false,
        }
        
    ]
    },
    methods: {
        removeLi: function (index) {
        this.list.splice(index, 1)
        },
        addLi: function () {
            if (this.inputText != '') {
            const newLi = {
                text: this.inputText,
                notDone: true
            }
            this.list.push(newLi);
            this.inputText = '';
        } else {
            alert('Non hai inserito una commissione')
        }
        },
    }
    })