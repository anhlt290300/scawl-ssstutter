# scrawl-data-ssstutter (version Tết 2024)
## Mô tả dữ liệu
# Product Card 
    - slug  : string
    - title  : string
    - tag  :  string || null
    - price  :  string
    - cost : string || null
    - discount  :  number
    - mark : string
    - colors  : number 
# Product (full)
{
    - slug  : string
    - title  : string
    - tag  :  string || null
    - price  :  string
    - cost : string || null
    - discount  :  number
    - mark : string
    - description : string
    - option : [
        {
            - title : string
            - mark : string
            - imgs : [
                img : string,
                ...
            ]
            - sizes : [
                {
                    title : string,
                    avalable : bool
                },
                ...
            ]
        },
        ...
    ]
}



# suggested products 
[
    ProductCard,
    ...
]