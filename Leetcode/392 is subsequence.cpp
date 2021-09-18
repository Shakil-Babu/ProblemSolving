int sCounter = 0;
        int tCounter = 0;
        
        while(sCounter < s.length() && tCounter < t.length()) {
            if(s[sCounter] == t[tCounter]) {
                sCounter++;
                tCounter++;
            } else {
                tCounter++;
            }
        }
        
        if(sCounter == s.length()) {
            return true;
        }
        
        return false;