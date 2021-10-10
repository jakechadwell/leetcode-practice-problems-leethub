class Solution {
    public String[] findWords(String[] words) {
        String[] keyboard = {"qwertyuiop", "asdfghjkl", "zxcvbnm"};
        List<String> result = new LinkedList<>();
        for(String word : words) {
            boolean isValid = true;
            String temp = word.toLowerCase();
            
            int index = 0;
            if(keyboard[1].indexOf(temp.charAt(0)) > -1) index = 1;
            else if(keyboard[2].indexOf(temp.charAt(0)) > -1) index = 2;
            
            for(char letter : temp.toCharArray())
            {
                if(keyboard[index].indexOf(letter) == -1) {
                    isValid = false;
                    break;
                }
            }
            
            if (isValid) result.add(word);
        }
        String[] resultArray = new String[result.size()];
        return result.toArray(resultArray);
    }
}