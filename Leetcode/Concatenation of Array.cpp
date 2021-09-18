class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        vector<int> output = nums;
        output.insert(output.end(), nums.begin(), nums.end());
        return output;
    }
};