export default {
    data: function() {
        return {
            candidate: { }
        };
    },

    props: [ 'disableSubmit' ],

    watch: {
        candidate: function () {
            this.$emit('update:getCandidateData', this.candidate);
        }
    }
};
