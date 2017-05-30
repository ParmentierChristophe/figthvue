window.addEventListener('load', function() {
    new Vue({
        el: '#vue',
        data: {
            vie: 100,
            degats1: false,
            degats2: false,
            degats3: false,
            degats4: false,
            fin: false

        },
        methods: {
            punch: function() {
                this.vie -= 10;
                if(this.vie == 80) {
                    this.degats1 = true;
                }else if(this.vie == 60) {
                    this.degats2 = true;
                } else if(this.vie == 40) {
                    this.degats3 = true;
                } else if(this.vie == 20) {
                    this.degats4 = true;
                } else if(this.vie == 0) {
                    this.fin = true;
                    this.degats1 = false;
                    this.degats2 = false;
                    this.degats3 = false;
                    this.degats4 = false;
                }

            },

            restart: function() {
                this.vie = 100;
                this.fin = false;

            }
        },
        computed: {

        }

    });
})
