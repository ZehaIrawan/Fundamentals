class Greeter
  attr_accessor :name
  def initialize(name = "World")
    @name = name
  end

  def say_hi
    puts "Hi #{@name}!"
  end
  
  def say_bye
    puts "Bye #{@name}, see you soon."
  end
end 

greeter = Greeter.new("Zeha")
greeter.name = "Dragon"

greeter.say_hi