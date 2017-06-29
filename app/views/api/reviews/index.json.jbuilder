# debugger
@reviews.each do |review|
  json.set! review.id do
    json.partial! "api/reviews/review", review: review
  end
end

# json.orderIds @reviews.map{ |review| review.id }
