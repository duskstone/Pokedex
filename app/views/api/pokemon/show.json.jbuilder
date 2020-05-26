json.extract! @poke, :id, :name, :attack, :defense, :moves, :poke_type, :item_ids

json.items do 
    @poke.items.each do |item|
        json.set! item.id do 
            json.extract! item, :name, :pokemon_id, :price, :happiness
            json.image_url asset_path("pokemon_snaps/#{@poke.image_url}")
        end
    end
end