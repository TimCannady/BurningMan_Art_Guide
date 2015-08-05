require 'react/jsx/template'

class React::JSX::Template

  SYNTAX_ERROR_MESSAGE = /SyntaxError: unknown: Unexpected token \((\d+):(\d+)\)/

  def evaluate_with_better_errors(scope, locals, &block)
    evaluate_without_better_errors(scope, locals, &block)
  rescue ExecJS::RuntimeError => error

    raise error unless error.message.match(SYNTAX_ERROR_MESSAGE)
    line, col = $1, $2
    message = "SyntaxError: #{@file}:#{line}:#{col}"
    message += "\n\n#{source_snippit(@data, line)}"
    error.instance_variable_set(:@message, message)
    def error.message
      @message
    end
    raise error

  end

  alias_method_chain :evaluate, :better_errors

  private

  SNIPPIT_PADDING = 30
  def source_snippit(source, line)
    line = line.to_i
    lines = source.split("\n")

    lines = lines.each_with_index.map do |line, index|
      "#{index+1}: #{line}"
    end

    range = [line - SNIPPIT_PADDING / 2, SNIPPIT_PADDING]
    if range[1] >= lines.length
      range = [lines.length - SNIPPIT_PADDING, SNIPPIT_PADDING]
    end
    if range[0] < 0
      range = [0,SNIPPIT_PADDING]
    end

    lines.slice(*range).join("\n")
  rescue
    binding.pry
    raise
  end

end
