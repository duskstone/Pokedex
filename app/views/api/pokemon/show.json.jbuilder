json.extract! @poke, :id, :name
json.items do 
    json.array! @poke.items do |item|
        json.id item.id
        json.name item.name
        json.image_url item.image_url
    end
end