const data = [
    {
        "title": "United Kingdom", 
        "text": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, is a sovereign state in Europe."
    },
    {
        "title": "France", 
        "text": "France, officially the French Republic (French: R\u00e9publique fran\u00e7aise), is a unitary sovereign state comprising territory in western Europe and several overseas regions and territories."
    },
    {
        "title": "Spain", 
        "text": "Spain (Spanish: Espa\u00f1a), officially the Kingdom of Spain (Spanish: Reino de Espa\u00f1a), is a sovereign state located on the Iberian Peninsula in southwestern Europe."
    },
    {
        "title": "Germany", 
        "text": "Germany, officially the Federal Republic of Germany (German: Bundesrepublik Deutschland), is a federal parliamentary republic in western - central Europe."
    }
] 

function countryList (data) {
    const self = this

    self.data = data;

    self.initItems = function(data) {
        const list = self.data.map((item, id) => self.createElement(item, id))
        
        $('#root').append(list)
        self.initActions()
    }

    self.initActions = function() {
        $('.item p').hide().prev().click(function() {
            $('.item p').not(this).slideUp().parent().removeClass('active');
            $(this).next().not(":visible").slideDown().parent().addClass('active')
        })

        $('.item i').click(function() {
            const parentId = $(this).parent().attr('data-id');
            self.removeItem(parentId);
            $('#root').empty();
            self.initItems();
        })
    }
    
    self.createElement = function(item, id) {
        return newItem = $(`
        <div class="item" data-id=${id}>
            <h4 class="title">${item.title}</h4>
            <p class="text">${item.text}</p>
            <i class="fas fa-trash"></i>
        </div>
        `)
    }

    self.removeItem = function(idx) {
        return self.data.splice(idx, 1)
    }


}

var countryList = new countryList(data)
countryList.initItems()
console.log(countryList)